import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menu = [{ icon: "icon", title: "Dashboard", link: "/dashboard" }];

  return (
    <div className="sidebar">
      <ul>
        {menu.map((menuitem) => {
          return (
            <li>
              <NavLink
                className={({ isActive }) =>
                  ` ${isActive ? "bg-active" : "bg-menu"}`
                }
                to={menuitem.link}
              >
                <p>{menuitem.title}</p>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
