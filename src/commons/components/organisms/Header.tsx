/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import "./Header.scss";
import logoImg from "../../../assets/images/diva/diva_logo.png";

interface IHeaderProps {
    emphasize?: string,
    normal?: string
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
    return (
        <div className="app-header">

            <div className="header-logo">
                {/* <img src="assets/images/diabetes/header-logo.svg" routerLink="/lecture/main"> */}

                {/* 매니저-사이트관리에서 적용한 로고(logoURL)를 불러온다.  */}
                <img src={logoImg}></img>
            </div>

            <nav className="menu-section">
                <div className="container">
                    <div className="menu-container web-only">
                        <div className="link-list-wrapper">
                            <div className="item-wrapper">
                                <a>강의</a>
                                {/* <a routerLink="/lecture/main">강의</a> */}
                            </div>
                            <div className="item-wrapper">
                                <a>강연자</a>
                                {/* <a routerLink="/intro">강연자</a> */}
                            </div>
                            <div className="item-wrapper">
                                <a>셀프테스트</a>
                                {/* <a routerLink="/selftest/selftest-main">셀프테스트</a> */}
                            </div> -
          <div className="item-wrapper">
                                <a>자료실</a>
                                {/* <a routerLink="/reference/reference-main">자료실</a> */}
                            </div>
                            <div className="item-wrapper">
                                <a>커뮤니티</a>
                                {/* <a routerLink="/community/community-main">커뮤니티</a> */}
                            </div>
                            <div className="item-wrapper">
                                <a>공지사항</a>
                                {/* <a routerLink="/notice">공지사항</a> */}
                            </div>
                            <div className="login-wrapper">
                                <div className="login-user-wrapper">
                                    {/* 여기부터 비번 이슈를위한 임시 마이페이지 ON했다 */}
                                    <a className="identifier-wrapper">
                                        {/* <a className="identifier-wrapper" routerLink="/mypage/mypage-edit"> */}
                                        {/* <img [src]="'assets/images/ic_mycommunity.png'" /> */}
                                        마이페이지
              </a>
                                    {/* 여기까지 비번 이슈를위한 임시 마이페이지 ON */}
                                    {/* <span style={{ 'margin-left': '5px', 'margin-right': '5px', 'font-weight': 'bold' }}>|</span> */}
                                    <a>LOGOUT</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="menu-container mobile-only">
                        <div className="left-buttons">
                            <button className="side-menu-button" type="button">
                                <img src="assets/images/ic_navi.png" />
                            </button>
                        </div>

                        <div className="header-title-wrapper"></div>

                        <section className="right-buttons">
                            <button type="button" className="className-button">
                                <img src="assets/images/ic_{{appService.isRightSideMenu.className}}.png" />
                            </button>

                            <button type="button" className="search-button">
                                <img src="assets/images/ic_search_b.png" />
                            </button>
                        </section>

                        <div className="search-box-wrapper">
                            {/* <comp-search-box [pageclassName]="'header'"></comp-search-box> */}
                        </div>

                    </div>
                </div >
            </nav >

            {/* 사이드메뉴 */}
            <section id="app-side-menu" className="mobile-only">
                <div className="side-menu-container">
                    <div className="side-header-container">
                        <button type="button" className="back-button">
                            <img src="assets/images/ic_back_w.png" />
                        </button>
                        <div className="side-logo">
                            <img src="assets/images/diabetes/kda_logo_white.png" />
                        </div>
                    </div>

                    <div className="side-login-container">
                        <div className="login-wrapper">
                            <a className="image-wrapper">
                                <img src='assets/images/img_default.png' />
                                {/* <img [src]="user.photos.length > 0 && user.photos[0].secure_url ? user.photos[0].secure_url : 'assets/images/img_default.png'" /> */}
                            </a>
                            <a className="identifier-wrapper">
                                아이쿱<span>님,<br /> 환영합니다!</span>
                            </a>
                            <div className="logout">
                                <img src="/assets/images/ic_logout_m.png" /> 로그아웃
          </div>
                        </div>
                    </div>
                    <div className="side-menu-list-container">
                        <div className="side-menu-tabs">
                            <div className="tab-manu">메뉴</div>
                            <div className="tab-manu">교육
            카테고리</div>
                        </div>

                        <div className="side-menus">

                            {/* 메뉴  */}
                            <section className="menu-wrapper" >
                                <div className="menu-item ">
                                    <a>강의</a>
                                </div >
                                <div className="menu-item">
                                    <a >강연자</a>
                                </div >
                                < div className="menu-item">
                                    <a >셀프테스트</a>
                                </div >
                                <div className="menu-item">
                                    <a >자료실</a>
                                </div >
                                < div className="menu-item">
                                    <a >커뮤니티</a>
                                </div >
                                <div className="menu-item">
                                    <a >공지사항</a>
                                </div >
                            </section >

                            {/* Category  */}
                            <section className="side-category-wrapper">
                                {/* <comp-category-menus [user] = "user" ></comp - category - menus > */}
                            </section >

                        </div >
                    </div >

                </div >
            </section >
        </div >
    );
};

Header.defaultProps = {
    emphasize: '내과학교실',
    normal: '이 지식공유플랫폼을 새로이 오픈하였습니다.'
};


export default Header;
