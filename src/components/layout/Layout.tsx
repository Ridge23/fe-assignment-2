import React from 'react';

import SideBarContainer from 'components/sidebar/SideBarContainer';
interface ILayout {
    title: string;
    children: JSX.Element | JSX.Element[] | string;
}

import './sass/layout.scss';

export default function Layout({ title, children }: ILayout): JSX.Element {
    return (
        <div className="layout">
            <div className="layout__sidebar">
                <SideBarContainer />
            </div>
            <div className="layout__content">
                <div className="layout__content-header">
                </div>
                <div className="layout__content-container">
                    <h1 className="layout__content-title">{title}</h1>
                    <div className="layout-content-container">{children}</div>
                </div>
                <div className="layout__content-footer">
                </div>
            </div>
        </div>
    );
}