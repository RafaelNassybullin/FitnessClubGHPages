import React from 'react';

const BallIcon = () => {
    return (
        <>
            <svg viewBox="0 0 49 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M47.9259 44.5858L43.5 42.3728V29.4688C43.4979 27.6377 42.7696 25.8823 41.4749 24.5876C40.1802 23.2929 38.4247 22.5646 36.5937 22.5625H22.8098L22.7781 22.5149C22.3648 21.8941 21.8264 21.3665 21.1973 20.966C20.5682 20.5654 19.8623 20.3007 19.125 20.1889V3.0625C19.1243 2.41626 18.8672 1.7967 18.4103 1.33973C17.9533 0.882772 17.3337 0.625731 16.6875 0.625H15.0625C14.892 0.625003 14.7257 0.678659 14.5874 0.778369C14.4491 0.878079 14.3456 1.01879 14.2916 1.18057L13.7754 2.7293L12.9884 2.33579C12.7956 2.23944 12.5725 2.22359 12.3681 2.29173C12.1637 2.35987 11.9947 2.50642 11.8983 2.69914L11.0858 4.32414C11.0217 4.45225 10.9927 4.59502 11.0016 4.73798C11.0105 4.88094 11.057 5.01901 11.1365 5.13818L12.5937 7.32415L10.5487 23.6845C9.79516 22.964 8.7926 22.562 7.74999 22.5625H4.49999C3.65485 22.562 2.83063 22.8252 2.14224 23.3155C1.45385 23.8058 0.935614 24.4987 0.659795 25.2975C0.383977 26.0964 0.364324 26.9614 0.603577 27.772C0.84283 28.5825 1.32906 29.2982 1.99447 29.8193L1.54396 30.7203C1.34405 31.1201 1.24334 31.5621 1.25033 32.009C1.25732 32.4559 1.37181 32.8946 1.58413 33.2879C1.79645 33.6812 2.10035 34.0176 2.47013 34.2687C2.83991 34.5197 3.26471 34.6781 3.70861 34.7303C2.74339 36.1335 2.17987 37.7737 2.07892 39.4738C1.97797 41.1739 2.34343 42.8692 3.13582 44.3768C3.92822 45.8843 5.11743 47.1467 6.57501 48.0276C8.03259 48.9085 9.70315 49.3744 11.4062 49.375H16.2812C18.2785 49.3756 20.2234 48.736 21.8305 47.55C23.4375 46.3641 24.6222 44.6942 25.2105 42.7856C25.7989 40.8769 25.7599 38.8299 25.0995 36.945C24.439 35.0601 23.1918 33.4365 21.5408 32.3125H35.5058L37.8125 45.3834V47.75C37.8125 47.9655 37.8981 48.1721 38.0505 48.3245C38.2028 48.4769 38.4095 48.5625 38.625 48.5625H47.5625C47.778 48.5625 47.9846 48.4769 48.137 48.3245C48.2894 48.1721 48.375 47.9655 48.375 47.75V45.3125C48.375 45.1616 48.333 45.0137 48.2537 44.8854C48.1743 44.757 48.0608 44.6533 47.9259 44.5858ZM32.9375 24.1875V30.6875H25.625V24.1875H32.9375ZM12.9884 4.15256L13.8866 4.60171C13.9907 4.65377 14.1048 4.68286 14.2211 4.68699C14.3375 4.69113 14.4534 4.67021 14.5609 4.62567C14.6685 4.58112 14.7652 4.51398 14.8446 4.4288C14.9239 4.34361 14.984 4.24237 15.0208 4.13193L15.6481 2.25H16.6875C16.9029 2.25025 17.1094 2.33593 17.2617 2.48825C17.4141 2.64057 17.4997 2.84709 17.5 3.0625V16.875H13.0376L14.2437 7.22577C14.2679 7.03228 14.2217 6.83654 14.1135 6.67432L12.7501 4.62913L12.9884 4.15256ZM5.31249 24.1875H7.74999C8.39645 24.1875 9.01644 24.4443 9.47356 24.9014C9.93068 25.3585 10.1875 25.9785 10.1875 26.625C10.1875 27.2715 9.93068 27.8915 9.47356 28.3486C9.01644 28.8057 8.39645 29.0625 7.74999 29.0625H6.93749V28.25C6.93749 28.0345 6.8519 27.8279 6.69955 27.6755L5.31249 26.2884V24.1875ZM3.68749 24.3273V26.625C3.68748 26.8405 3.77307 27.0471 3.92543 27.1995L5.31249 28.5866V29.0625H4.49999C3.92501 29.0626 3.36853 28.8593 2.92891 28.4887C2.48928 28.1182 2.19483 27.6041 2.09759 27.0374C2.00036 26.4707 2.1066 25.8879 2.39754 25.3919C2.68848 24.896 3.14538 24.5189 3.68749 24.3273ZM2.87499 31.9655C2.87522 31.7855 2.91711 31.6081 2.99738 31.447L3.44675 30.5482C3.79019 30.6407 4.14432 30.6875 4.49999 30.6875H8.56249C9.20873 30.6882 9.82829 30.9453 10.2853 31.4022C10.7422 31.8592 10.9993 32.4788 11 33.125V34.6592C9.49967 33.6544 7.73356 33.1202 5.92781 33.125H4.03443C3.72702 33.1246 3.43232 33.0024 3.21495 32.785C2.99759 32.5676 2.87533 32.2729 2.87499 31.9655ZM24 40.0312C23.9977 42.0777 23.1837 44.0396 21.7367 45.4867C20.2896 46.9337 18.3277 47.7477 16.2812 47.75H11.4062C9.90046 47.7502 8.4275 47.31 7.16883 46.4834C5.91017 45.6569 4.9208 44.4802 4.3226 43.0984C3.72441 41.7165 3.54354 40.1898 3.80226 38.7064C4.06099 37.2231 4.74801 35.8478 5.77869 34.75H5.92781C6.91439 34.7473 7.89171 34.9403 8.80319 35.3179C9.71467 35.6954 10.5422 36.25 11.2379 36.9495C11.3516 37.0631 11.4963 37.1405 11.6539 37.1719C11.8116 37.2033 11.9749 37.1872 12.1234 37.1257C12.2719 37.0642 12.3988 36.96 12.4881 36.8264C12.5773 36.6928 12.625 36.5357 12.625 36.375V33.125C12.6251 32.6963 12.557 32.2703 12.4233 31.863C13.3392 32.1612 14.2964 32.3129 15.2597 32.3125H16.2812C18.3277 32.3148 20.2896 33.1288 21.7367 34.5758C23.1837 36.0229 23.9977 37.9848 24 40.0312ZM15.2597 30.6875C13.6727 30.6916 12.1259 30.189 10.8444 29.2529C11.4552 28.5368 11.797 27.6299 11.8109 26.6887L12.8345 18.5H17.5V25H19.125V21.8405C20.0668 22.0487 20.8915 22.6135 21.426 23.4164L21.699 23.8257C21.7732 23.937 21.8737 24.0283 21.9916 24.0914C22.1095 24.1545 22.2412 24.1875 22.375 24.1875H24V30.6875H15.2597ZM36.1875 30.6875H34.5625V24.1875H36.5937C37.9939 24.1891 39.3363 24.746 40.3264 25.7361C41.3165 26.7262 41.8734 28.0686 41.875 29.4688V42.415L39.2198 44.0081L36.9876 31.3588C36.9544 31.1707 36.856 31.0003 36.7097 30.8775C36.5634 30.7548 36.3785 30.6875 36.1875 30.6875ZM46.75 46.9375H39.4375V45.7725L42.7231 43.8012L46.75 45.8147V46.9375Z"
                    fill="#FF2625" opacity="0.2"/>
            </svg>
        </>
    );
};

export default BallIcon;