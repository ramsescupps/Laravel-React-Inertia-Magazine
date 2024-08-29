import { Link } from "@inertiajs/react";
import React from "react";

export default function Sidebar() {
    return (
        <aside
            className="sidenav bg-default navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl fixed-start m-0 rounded-none"
            id="sidenav-main"
        >
            <div className="sidenav-header">
                <i
                    className="fas fa-times p-3 cursor-pointer opacity-5 position-absolute end-0 top-0 d-none d-xl-none opacity-8 text-white"
                    aria-hidden="true"
                    id="iconSidenav"
                />
                <Link className="navbar-brand m-0" href="/" target="_blank">
                    Blogy Admin Page
                </Link>
            </div>
            <hr className="horizontal dark mt-0" />
            <div className="navbar-collapse w-auto " id="sidenav-collapse-main">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            className={`${
                                route().current("dashboard") && "active"
                            } nav-link`}
                            href={route("dashboard")}
                        >
                            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="ni ni-tv-2 text-primary text-sm opacity-10" />
                            </div>
                            <span className="nav-link-text ms-1">
                                Dashboard
                            </span>
                        </Link>
                    </li>

                    <li className="nav-item mt-3">
                        <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">
                            Manage
                        </h6>
                    </li>
                    <li className="nav-item">
                        <Link
                            className={`${
                                route().current("post.*") && "active"
                            } nav-link`}
                            href="/category"
                        >
                            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="ni ni-ambulance text-warning text-sm opacity-10" />
                            </div>
                            <span className="nav-link-text ms-1">Category</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className={`${
                                route().current("post.*") && "active"
                            } nav-link`}
                            href={route("profile.edit")}
                        >
                            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="ni ni-image text-warning text-sm opacity-10" />
                            </div>
                            <span className="nav-link-text ms-1">Posts</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className={`${
                                route().current("users.*") && "active"
                            } nav-link`}
                            href={route("users.show")}
                        >
                            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="fas fa-user-lock text-warning text-sm opacity-10" />
                            </div>
                            <span className="nav-link-text ms-1">Users</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " href={route("logout")}>
                            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="fas fa-sign-out-alt text-danger text-sm opacity-10"></i>
                            </div>
                            <span className="nav-link-text ms-1">Log out</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
