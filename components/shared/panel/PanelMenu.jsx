import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Menu } from 'antd';
import { menuPrimary } from '~/public/static/data/menu';
import menu_data from '~/public/static/data/menu';
import Link from 'next/link';

const { SubMenu } = Menu;

class PanelMenu extends Component {
    constructor(props) {
        super(props);
    }

    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    state = {
        openKeys: [],
    };

    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(
            (key) => this.state.openKeys.indexOf(key) === -1
        );
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    render() {
        return (
            <Menu
                mode="inline"
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}
                className="menu--mobile-2">
                            <Menu.Item >
                                    <Link
                                        href='/'
                                        >
                                        <a>Biz haqimizda</a>
                                    </Link>
                               
                            </Menu.Item>
                            <Menu.Item >
                                    <Link
                                        href="jalyuzi"
                                        >
                                        <a>Jalyuzi</a>
                                    </Link>
                               
                            </Menu.Item>
                            <Menu.Item >
                                    <Link
                                        href="parda"
                                        >
                                        <a>Pardalar</a>
                                    </Link>
                               
                            </Menu.Item>
            </Menu>
        );
    }
}

const mapStateToProps = (state) => {
    return state.setting;
};

export default connect(mapStateToProps)(PanelMenu);
