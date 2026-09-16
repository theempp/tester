import bpy, math, os
from mathutils import Vector
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
bpy.ops.object.select_all(action='SELECT'); bpy.ops.object.delete(use_global=False)
def mat(name,color,rough=.75,metal=0):
 m=bpy.data.materials.new(name);m.diffuse_color=(*color,1);m.use_nodes=True
 p=m.node_tree.nodes.get('Principled BSDF');p.inputs['Base Color'].default_value=(*color,1);p.inputs['Roughness'].default_value=rough;p.inputs['Metallic'].default_value=metal
 return m
bone=mat('Bone laminate - dry satin',(.61,.585,.52),.84)
ink=mat('Carbon ink',(.009,.009,.008));steel=mat('Brushed steel',(.35,.35,.33),.55,.8)
root=bpy.data.objects.new('HOUR_ZERO',None);bpy.context.collection.objects.link(root)
def mesh(name,verts,faces,material):
 m=bpy.data.meshes.new(name);m.from_pydata(verts,[],faces);m.update();o=bpy.data.objects.new(name,m);bpy.context.collection.objects.link(o);o.data.materials.append(material);o.parent=root
 for p in m.polygons:p.use_smooth=True
 return o
# Author a gusseted pouch, with a separate bottom tear strip; front is -Y.
N=64; rows=40; verts=[];faces=[]
for j in range(rows+1):
 z=.07+2.93*j/rows; t=j/rows
 width=.902+.018*math.sin(t*math.pi)-.05*t
 depth=.24*min(1,(1-t)*9+.12)
 for i in range(N):
  a=2*math.pi*i/N;cx=math.cos(a);sy=math.sin(a)
  x=width*math.copysign(abs(cx)**.25,cx);y=depth*math.copysign(abs(sy)**.25,sy)
  wrinkle=.018*math.sin(t*38+a*7)*(abs(cx)**8)*(math.sin(math.pi*t)**.5)
  y+=wrinkle;verts.append((x,y,z))
for j in range(rows):
 for i in range(N):
  a=j*N+i;b=j*N+(i+1)%N;faces.append((a,b,b+N,a+N))
faces.append(tuple(range(rows*N,(rows+1)*N)))
body=mesh('PouchBody',verts,faces,bone)
# seam separated, rotates away along bottom fold.
def cube(name,loc,scale,material,bevel=0):
 bpy.ops.mesh.primitive_cube_add(size=1,location=loc);o=bpy.context.object;o.name=name;o.scale=scale;bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);o.data.materials.append(material);o.parent=root
 if bevel:
  b=o.modifiers.new('Soft folded edges','BEVEL');b.width=bevel;b.segments=3;bpy.context.view_layer.objects.active=o;bpy.ops.object.modifier_apply(modifier=b.name)
 return o
cube('BottomSeam',(0,0,.045),(1.76,.45,.09),bone,.022)
cube('FoldedTopSeal',(0,-.01,2.925),(1.70,.115,.15),bone,.035)
# Valve in the face, flush and softly brushed.
bpy.ops.mesh.primitive_cylinder_add(vertices=48,radius=.115,depth=.013,location=(0,-.258,2.39),rotation=(math.pi/2,0,0));v=bpy.context.object;v.name='FlushValve';v.data.materials.append(steel);v.parent=root
font=bpy.data.fonts.load('/System/Library/Fonts/Supplemental/DIN Condensed Bold.ttf')
mono=bpy.data.fonts.load('/System/Library/Fonts/Supplemental/Courier New.ttf')
def label(name,body,location,size,font,width=None):
 c=bpy.data.curves.new(name,'FONT');c.body=body;c.font=font;c.size=size;c.align_x='CENTER';c.extrude=0;c.resolution_u=4
 o=bpy.data.objects.new(name,c);bpy.context.collection.objects.link(o);o.location=location;o.rotation_euler=(math.pi/2,0,0);o.data.materials.append(ink);o.parent=root
 bpy.context.view_layer.update()
 if width:o.scale.x=width/max(o.dimensions.x,.001)
 bpy.context.view_layer.objects.active=o;o.select_set(True);bpy.ops.object.convert(target='MESH');o.select_set(False)
label('Wordmark','HOUR ZERO',(0,-.261,1.66),.58,font,1.55)
cube('LabelRule',(0,-.264,1.52),(1.49,.001,.004),ink)
label('SpecOrigin','ORIGIN:   ETHIOPIA / GUJI',(0,-.263,1.39),.036,mono)
label('SpecProcess','PROCESS:  NATURAL',(0,-.263,1.32),.036,mono)
label('SpecVariety','VARIETY:  HEIRLOOM',(0,-.263,1.25),.036,mono)
label('DateCaption','ROAST DATE:',(-.28,-.263,1.18),.036,mono)
# Named camera/station markers are carried as GLB extras.
for name,frame in [('FILM_LOCK',1),('LABEL_FRONT',52),('LEFT_THIRD',68),('RIP_OPEN',76),('POUR',88),('PILE',100)]:
 bpy.context.scene.timeline_markers.new(name,frame=frame)
 e=bpy.data.objects.new(name,None);bpy.context.collection.objects.link(e);e.parent=root;e['progress']=frame/100 if frame>1 else .44
# One bean geometry, reused by instancing at runtime.
bpy.ops.mesh.primitive_uv_sphere_add(segments=12,ring_count=8,radius=1,location=(0,0,-10));bean=bpy.context.object;bean.name='CoffeeBean';bean.scale=(.039,.025,.058);bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);bean.data.materials.append(mat('Roasted bean',(.075,.033,.015),.63));bean.parent=root
# crease runs lengthwise as a recessed geometric groove.
for p in bean.data.vertices:
 if p.co.y<-.015 and abs(p.co.x)<.019:p.co.y+=.009*(1-abs(p.co.x)/.019)
for p in bean.data.polygons:p.use_smooth=True
# Camera framing: 3 unit pouch fills 56.7% of 1080, centre matches y=643.5.
bpy.ops.object.camera_add(location=(0,-10,2.008));cam=bpy.context.object;cam.name='FilmMatchCamera';cam.rotation_euler=(math.pi/2,0,0);cam.data.type='ORTHO';cam.data.ortho_scale=3/.567*1920/1080;bpy.context.scene.camera=cam
for name,loc,power,size in [('Key',(-3,-5,6),450,5),('Fill',(3,-4,3),200,4)]:
 bpy.ops.object.light_add(type='AREA',location=loc);o=bpy.context.object;o.name=name;o.data.energy=power;o.data.shape='DISK';o.data.size=size;o.rotation_euler=(Vector((0,0,1.5))-o.location).to_track_quat('-Z','Y').to_euler()
scene=bpy.context.scene;scene.render.engine='CYCLES';scene.cycles.samples=32;scene.render.resolution_x=1920;scene.render.resolution_y=1080;scene.render.resolution_percentage=100;scene.render.film_transparent=True
scene.world.color=(.2,.2,.2);scene.view_settings.view_transform='Standard'
# Bake the approved film lighting into the held front surface. The turn reveals
# the corrected print; no media-layer dissolve is needed at the seam.
photo=bpy.data.materials.new('FilmLockProjection');photo.use_nodes=True
nt=photo.node_tree;nt.nodes.clear();out=nt.nodes.new('ShaderNodeOutputMaterial');em=nt.nodes.new('ShaderNodeEmission');tex=nt.nodes.new('ShaderNodeTexImage');tex.image=bpy.data.images.load(ROOT+'/assets/source/film-lock-browser.png');tex.image.pack();uvnode=nt.nodes.new('ShaderNodeUVMap');uvnode.uv_map='FilmProjection';nt.links.new(uvnode.outputs['UV'],tex.inputs['Vector']);nt.links.new(tex.outputs['Color'],em.inputs['Color']);nt.links.new(em.outputs[0],out.inputs['Surface'])
bpy.context.view_layer.update()
for o in list(root.children):
 if o.type!='MESH' or o.name not in ['PouchBody','BottomSeam','FoldedTopSeal','FlushValve']:continue
 o.data.materials.append(photo);uv=o.data.uv_layers.new(name='FilmProjection')
 for poly in o.data.polygons:
  if (o.matrix_world.to_3x3() @ poly.normal).y < -.25:poly.material_index=len(o.data.materials)-1
  for li in poly.loop_indices:
   co=o.matrix_world @ o.data.vertices[o.data.loops[li].vertex_index].co
   uv.data[li].uv=(.5+co.x/(3/.567*1920/1080),.5+(co.z-2.008)/(3/.567))

os.makedirs(ROOT+'/public/models',exist_ok=True)
bpy.ops.wm.save_as_mainfile(filepath=ROOT+'/assets/source/hour-zero-bag.blend')
bpy.ops.object.select_all(action='DESELECT')
for o in list(root.children)+[root]:o.select_set(True)
bpy.ops.export_scene.gltf(filepath=ROOT+'/public/models/hour-zero-bag.glb',use_selection=True,export_format='GLB',export_draco_mesh_compression_enable=True,export_draco_mesh_compression_level=6,export_extras=True)
bean.hide_render=True
for o in root.children:
 if o.type=='MESH':
  for poly in o.data.polygons:
   if o.data.materials[poly.material_index].name=='FilmLockProjection':poly.material_index=0
scene.render.filepath=ROOT+'/public/posters/bag-static.png';bpy.ops.render.render(write_still=True)
print('ASSET_TRIANGLES',sum(len(o.data.polygons) for o in root.children if o.type=='MESH'))
