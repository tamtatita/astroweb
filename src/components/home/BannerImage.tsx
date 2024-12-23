import { useTranslation } from "react-i18next";
import { Fade } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";
import i18n from "../../i18n/index";
import { useEffect } from "react";
const BannerImage = () => {
  const changeLanguage = (lng: string) => {
    localStorage.setItem("i18nextLng", lng); // Lưu ngôn ngữ vào localStorage
    alert("Đã thay đổi ngôn ngữ");
    i18n.changeLanguage(lng);
  };

  const { t } = useTranslation();

  // làm sao get được hiện tại đang ở ngôn ngữ nào
  const currentLanguage = i18n.language;
  console.log("currentLanguage", currentLanguage);
  const images = [
    "https://media.istockphoto.com/id/1220728836/vi/anh/b%C3%A3i-bi%E1%BB%83n-c%C3%A2y-c%E1%BB%8D-%C4%91%E1%BA%A3o-nhi%E1%BB%87t-%C4%91%E1%BB%9Bi-t%E1%BB%AB-tr%C3%AAn-cao.jpg?s=2048x2048&w=is&k=20&c=9fO8YFk8R9n4P0TPYdB3dNAMPfYC5By8HJRHZCWAODg=",
    "https://media.istockphoto.com/id/1038412058/vi/anh/th%C3%A1i-b%C3%ACnh-d%C6%B0%C6%A1ng-t%E1%BA%A1i-big-sur.jpg?s=2048x2048&w=is&k=20&c=XZ-g0j0CFBKVM0RIN-WFQMtVepeORhKTPDHCQQvSUPI=",
    "https://media.istockphoto.com/id/1756133188/vi/anh/quang-c%E1%BA%A3nh-ng%C6%B0-d%C3%A2n-%C4%91%C3%A1nh-b%E1%BA%AFt-c%C3%A1-tr%C3%AAn-s%C3%B4ng-%E1%BB%9F-n%C3%BAi-thung-thu%E1%BB%99c-t%E1%BB%89nh-tr%C3%A0-linh-t%E1%BB%89nh-cao-b%E1%BA%B1ng-vi%E1%BB%87t-nam.jpg?s=2048x2048&w=is&k=20&c=EzsW2f4u9s54Kbyb89xF33lCs15tLWFx0r0nq92icG4=",
    "https://media.istockphoto.com/id/526540092/vi/anh/th%C3%A0nh-ph%E1%BB%91-hi%E1%BB%87n-%C4%91%E1%BA%A1i-xinh-%C4%91%E1%BA%B9p-v%C3%A0o-ban-%C4%91%C3%AAm-%E1%BB%9F-th%C6%B0%E1%BB%A3ng-h%E1%BA%A3i-trung-qu%E1%BB%91c.jpg?s=2048x2048&w=is&k=20&c=cNedx44cnZMK57Q4N1O6U0EQ5zjQX16YpObik-h1w-Y=",
  ];
  const properties = {
    // prevArrow: (
    //   <button aria-label="prev" style={{ ...buttonStyle }}>
    //     <GrPrevious size={30} color="white" />
    //   </button>
    // ),
    // nextArrow: (
    //   <button aria-label="next" style={{ ...buttonStyle }}>
    //     <GrNext size={30} color="white" />
    //   </button>
    // ),
    duration: 1500, // Thời gian giữa các slide (3 giây)
    transitionDuration: 1000, // Thời gian chuyển tiếp giữa các slide (0.5 giây)
    infinite: true, // Cho phép slide lặp lại
    autoplay: true, // Bật tự động chuyển ảnh
    arrows: false, // Hiển thị các nút mũi tên
    dot: false,
    indicators: false,
  };
  return (
    <div className="h-[430px] w-full">
      {/* <Fade {...properties}>
        {images.map((slideImage, index) => (
          <div className="min-h-[430px] w-full" key={index}>
            <img
              width={1200}
              height={430}
              loading="eager"
              src={slideImage}
              // srcSet={`${slideImage} 800w, ${slideImage} 600w, ${slideImage} 400w`}
              // sizes="(max-width: 600px) 400px, (max-width: 800px) 600px, 800px"
              className="w-full h-[380px] sm:h-[430px] object-cover"
              alt={`Ảnh banner của website ${index}`}
            />
          </div>
        ))}
      </Fade> */}
      <span className="text-red-500 font-bold">{t("welcome")}</span>
      <div>
        <button onClick={() => changeLanguage("en")}>English</button>
        <button onClick={() => changeLanguage("vi")}>Tiếng Việt</button>
      </div>
    </div>
  );
};

export default BannerImage;
