'use strict';

const Menu = function (props) {
  let {items} = props;

  if (props.opened) {

  const li = items.map((item) => <li href={item.href}>{item.title}</li>)
  return (
    <div className="menu menu-open">
      <div className="menu-toggle"><span></span></div>
      <nav>
        <ul>
          {li}
        </ul>
      </nav>
    </div>
  )

} else {
  return (
    <div className="menu">
      <div className="menu-toggle"><span></span></div>
    </div>
  )
  }
}