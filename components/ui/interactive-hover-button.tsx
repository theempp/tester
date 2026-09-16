// Magic UI interactive-hover-button adapted to a semantic purchase link and square border.
import type { ComponentProps } from 'react';
export function InteractiveHoverButton({children,...props}:ComponentProps<'a'>){return <a {...props} className="buy-button"><span className="button-label">{children}</span><span className="button-arrow" aria-hidden="true">↗</span></a>}
