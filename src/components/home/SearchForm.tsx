import React, { useState, useEffect, useRef } from "react";
import { Button, Divider, Popconfirm, Select } from "antd";
import { FiMapPin } from "react-icons/fi";
import { FaRegMap } from "react-icons/fa6";
import useCustomLanguage from "../../hooks/useCustomLanguage";
import { useTranslation } from "react-i18next";
// import BoxAddress from "./BoxAddress";
import i18n from "../../i18n";
import { initI18n } from "../../i18n/i18n";
// import { i18n } from "i18next"; // Import the i18n type

interface SearchFormProps {
  searchTerm: string;
}
const SearchForm = () => {
  const { t, i18n: i18nInstance } = useTranslation();
  // const [state, setState] = useState<string | null>(searchTerm);
  const [i18nState, setI18nState] = useState<i18n | null>(null); // State to hold i18n instance

  useEffect(() => {
    setI18nState(i18nInstance); // Set the i18n instance to the state
  }, [i18nInstance]);

  if (!i18n) {
    // Hiển thị loading hoặc xử lý khi i18n chưa sẵn sàng
    return <div>Loading...</div>;
  }
  const [showBoxAddress, setShowBoxAddress] = useState(false);
  const boxRef = useRef(null); // Ref để theo dõi BoxAddress
  //   const navigate = useNavigate();

  const handleClickOutside = (event: any) => {
    if (boxRef.current && !boxRef.current.contains(event.target)) {
      setShowBoxAddress(false); // Đóng BoxAddress khi click ra ngoài
    }
  };

  useEffect(() => {
    if (showBoxAddress) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showBoxAddress]);

  const dataLocation = [
    { value: 0, label: "Chọn nơi khởi hành" },
    { value: 1, label: "Hà Nội" },
    { value: 2, label: "Hồ Chí Minh" },
  ];

  return (
    <div className="bg-white shadow-xl shadow-gray-300 min-w-[50vw] p-4 rounded-xl">
      <h1 className="text-2xl font-bold">{i18n.t("welcome")}</h1>

      <Divider />

      <div className="flex items-center gap-5">
        <div className="w-[80%] flex items-center justify-between mr-5">
          {/* Bạn muốn đi đâu */}
          <div className="flex items-center gap-4">
            <FiMapPin color="gray" size={34} />
            <div className="flex flex-col items-start">
              <h2 className="uppercase text-lg font-semibold">
                {i18n.t("bannerSearch", "address")}
              </h2>

              <div className="relative">
                <button
                  onClick={() => setShowBoxAddress((prev) => !prev)}
                  className="text-lg font-semibold text-gray-500"
                >
                  Bạn muốn đi đâu
                </button>

                {showBoxAddress && (
                  <div
                    ref={boxRef} // Thêm ref vào container của BoxAddress
                    className="absolute top-10 bg-white border shadow-lg rounded-lg"
                  >
                    {/* <BoxAddress /> */}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Ngày khởi hành */}
          <div className="flex items-center gap-4">
            <FaRegMap color="gray" size={34} />
            <div className="flex flex-col items-start">
              <h2 className="uppercase text-lg font-semibold">
                {/* {t("bannerSearch", "locationStart")} */}
              </h2>

              <Select
                size="large"
                defaultValue={0}
                style={{ width: 200 }}
                options={dataLocation}
                variant="borderless"
              />
            </div>
          </div>
        </div>
        <div className="w-[20%]">
          <button
            // onClick={() => navigate("/tours/search")}
            className="bg-primary text-white font-semibold w-full py-3 rounded-xl text-xl"
          >
            {/* {t("bannerSearch", "searchBtn")} */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
