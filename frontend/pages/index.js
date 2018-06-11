import Layout from "../components/Layout.js";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import PageWrapper from "../components/PageWrapper.js";
import Menu from "../components/Menu.js";
import { Config } from "../config.js";

const headerImageStyle = {
    marginTop: 50,
    marginBottom: 50
};
const columnContainer = {
    display: 'flex',
}
const wwuColumnStyle = {
    display: 'flex',
    maxWidth: '50%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    position: 'relative',
    flex: '0 0 50%',
    background: 'rgb(66, 85, 99)',
    textAlign: 'center',
}
const wwuInnerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    zIndex: '1',
    flex: '1 0 auto',
    background: 'rgba(66, 85, 99, 0.9)',
    margin: '30px auto',
    padding: '2rem 0px',
}
const wwuButtonStyle = {
    display: 'block',
    color: 'rgb(136, 176, 75)',
    textTransform: 'uppercase',
    marginTop: '20px',
    fontSize: '20px',
    fontWeight: '600',
    padding: '20px 50px',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'rgb(136, 176, 75)',
    borderImage: 'initial',
    background: 'none',
}
const wfuColumnStyle = {
    display: 'flex',
    maxWidth: '50%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    position: 'relative',
    flex: '0 0 50%',
    background: '#64ccc9',
    textAlign: 'center',
}
const wfuInnerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    zIndex: '1',
    flex: '1 0 auto',
    background: 'rgba(100, 204, 201, 0.9)',
    margin: '30px auto',
    padding: '2rem 0px',
}
const wfuButtonStyle = {
    display: 'block',
    color: 'rgb(66, 85, 99)',
    textTransform: 'uppercase',
    marginTop: '20px',
    fontSize: '20px',
    fontWeight: '600',
    padding: '20px 50px',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'rgb(66, 85, 99)',
    borderImage: 'initial',
    background: 'none',
}

class Index extends Component {
    static async getInitialProps(context) {
        const pageRes = await fetch(
            `${Config.apiUrl}/wp-json/postlight/v1/page?slug=frontpage`
        );
        const page = await pageRes.json();
        return { page };
    }

    render() {
        return (
            <Layout>
                <Menu menu={this.props.headerMenu} />
                <div
                    dangerouslySetInnerHTML={{
                        __html: this.props.page.content.rendered
                    }}
                />
                <div style={columnContainer}>
                    <div id="wwu" style={wwuColumnStyle}>
                        <div style={wwuInnerStyle}>
                            <h2 dangerouslySetInnerHTML={{
                                __html: this.props.page.acf.wwu_title}}
                            />
                            <p style={{ color: 'white' }}>{this.props.page.acf.wwu_subtitle}</p>
                            <div style={wwuButtonStyle}>{this.props.page.acf.wwu_button_text}</div>
                        </div>
                    </div>
                    <div id="wfu" style={wfuColumnStyle}>
                        <div style={wfuInnerStyle}>
                            <h2 dangerouslySetInnerHTML={{
                                __html: this.props.page.acf.wfu_title}}
                            />
                            <p style={{ color: 'white' }}>{this.props.page.acf.wfu_subtitle}</p>
                            <div style={wfuButtonStyle}>{this.props.page.acf.wfu_button_text}</div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default PageWrapper(Index);
