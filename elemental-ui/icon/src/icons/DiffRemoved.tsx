import React from "react";
import { makeIcon } from '../Icon';
const DiffRemoved = makeIcon(({
  title,
  titleId,
  ...props
}) => <svg width="1em" height="1em" viewBox="0 0 14 16" className="octicon octicon-diff-removed" aria-hidden="true" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fillRule="evenodd" d="M13 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 13H1V2h12v12zm-2-5H3V7h8v2z" /></svg>);
DiffRemoved.displayName = "DiffRemoved";
export default DiffRemoved;