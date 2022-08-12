import axios from "axios";
import React, { useState, useEffect } from "react";
import AppHeader from "../components/common/AppHeader";
import MainCard from "../main/MainCards";

const MainPage = () => {
  /**
   * #work4 요청을 작성 /v2.0/user/me?user_seq_no=1100034736
   * 해당 데이터를 받아온 다음에 console.log(계좌 목록에 관련된 array 출력 하세요)
   * console.log(data.res_list);
   *  1. localstroage 데이터를 가지고 올때 = localstorage.getItem("아이템명");
   * 요청을 만들때는 option 방식으로 작성하여 axios(option) 요청 생성
   */
  const [accountList, setAccountList] = useState([]);

  useEffect(() => {
    getAccountList();
  }, []);
  /**
   * useEffect 활용하여 최초에 1회 마운트시 계좌 목록을 불러옴
   */

  const getAccountList = () => {
    const accessToken = localStorage.getItem("accessToken");
    const userSeqNo = localStorage.getItem("userSeqNo");
    const option = {
      method: "GET",
      url: `v2.0/user/me`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        user_seq_no: userSeqNo,
      },
    };
    axios(option).then(({ data }) => {
      setAccountList(data.res_list);
    });
  };

  return (
    <div>
      <AppHeader title={"계좌 목록"}></AppHeader>
      {accountList.map((account) => {
        return (
          <MainCard
            bankName={account.bank_name}
            fintechUseNo={account.fintech_use_num}
          />
        );
      })}
    </div>
  );
};

export default MainPage;
