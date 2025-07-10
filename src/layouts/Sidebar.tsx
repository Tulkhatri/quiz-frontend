import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menu = [
    { icon: "icon", title: "Dashboard", link: "/dashboard" },
    { icon: "icon", title: "Category Management", link: "/category" },
    {
      icon: "icon",
      title: "Difficulty Level Management",
      link: "/level",
    },
    { icon: "icon", title: "Quiz", link: "/quiz" },
    { icon: "icon", title: "Question Management", link: "/question" },
    { icon: "icon", title: "Answer Management", link: "/answer" },
    { icon: "icon", title: "Attempt Results Viewer", link: "/attempt" },
  ];

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
