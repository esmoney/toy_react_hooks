/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';

interface IHeaderProps {
    emphasize?: string,
    normal?: string
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
    return (
        <section className="top-banner-section" >
            <div className="container">
                <div className="top-banner-wrapper row">
                    <div className="col col-9">
                        <span className="emphasize">{props.emphasize}</span> {props.normal}
                        <span className="description web-only">모바일에서도 간편하게 접속해보세요!</span>
                    </div>
                    <div className="col col-3 button__box">
                        <button type="button">
                            <span className="web-only">오늘 하루 보지 않기</span>
                            <img src="../../../assets/images/ic_delete_line.png" />
                        </button>
                    </div>
                </div>
            </div >
        </section >
    )
};

Header.defaultProps = {
    emphasize: '내과학교실',
    normal: '이 지식공유플랫폼을 새로이 오픈하였습니다.'
};


export default Header;
