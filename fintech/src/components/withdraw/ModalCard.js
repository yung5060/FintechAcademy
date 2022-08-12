import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const ModalCardBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: 20px;
  border: 1px #112211 solid;
`;
const CardTitle = styled.div`
  font-size: 1rem;
  color: black;
`;
const FintechUseNo = styled.div`
  font-size: 0.7rem;
  margin-bottom: 30px;
`;

const WithDrawButton = styled.button`
  border: none;
  padding: 0.3rem;
  background: #2aa450;
  color: white;
  margin-top: 0.3rem;
`;

const ModalCard = ({ bankName, fintechUseNo, tofintechno }) => {
  const [amount, setamount] = useState("");

  const genTransId = () => {
    let countnum = Math.floor(Math.random() * 1000000000) + 1;
    let transId = "M202201582U" + countnum; //이용기과번호 본인것 입력
    return transId;
  };

  const handlePayButtonClick = () => {
    // 출금 이체 발생시키기
    // data params json
    // tran_amt, fintech_use_num, req_client_fintech_use_num, bank_tran_id 고정값 사용 금지
    // axios option으로 요청을 작성하기 <- api 요청
    // application/json 은 데이터를 어떻게 전송?
    // 결과를 로그로 작성
    const accessToken = localStorage.getItem("accessToken");
    const data = {
      "bank_tran_id": genTransId(),
      "cntr_account_type": "N",
      "cntr_account_num": "100000000001",
      "dps_print_content": "쇼핑몰환불",
      "fintech_use_num": fintechUseNo,
      "wd_print_content": "오픈뱅킹출금",
      "tran_amt": amount,
      "tran_dtime": "20220812130000",
      "req_client_name": "홍길동",
      "req_client_fintech_use_num" : fintechUseNo,
      "req_client_num": "HONGGILDONG1234",
      "transfer_purpose": "ST",
      "recv_client_name": "조융",
      "recv_client_bank_code": "097",
      "recv_client_account_num": "100000000001"
    };
    const option = {
      method: "POST",
      url: "/v2.0/transfer/withdraw/fin_num",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: data,
    };

    axios(option).then(({ data }) => {
      console.log(data);
      if(data.rsp_code === "A0000") {
        deposit();
      }
    });
  };

  const deposit = () => {
    const twoLeggedToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJNMjAyMjAxNTgyIiwic2NvcGUiOlsib29iIl0sImlzcyI6Imh0dHBzOi8vd3d3Lm9wZW5iYW5raW5nLm9yLmtyIiwiZXhwIjoxNjY4MDYyNzg3LCJqdGkiOiJmNWE5MGE0Yy01MzE4LTRmNjYtOWVmYy1jM2IwODU2M2FjYzMifQ.JaibqmK6cZfJ6lwmslu8sZhG-THAKrl5MzPhmVbD6Ek";

    const data = {
      cntr_account_type: "N",
      cntr_account_num: "100000000001",
      wd_pass_phrase: "NONE",
      wd_print_content: "환불금액",
      name_check_option: "off",
      tran_dtime: "20220812130000",
      req_cnt: "1",
      req_list: [
        {
          tran_no: "1",
          bank_tran_id: genTransId(),
          fintech_use_num: tofintechno,
          print_content: "오픈서비스캐시백",
          tran_amt: amount,
          req_client_name: "홍길동",
          req_client_fintech_use_num: fintechUseNo,
          req_client_num: "HONGGILDONG1234",
          transfer_purpose: "ST",
        },
      ],
    };

    const option = {
      method: "POST",
      url: "/v2.0/transfer/deposit/fin_num",
      headers: {
        Authorization: `Bearer ${twoLeggedToken}`,
      },
      data: data,
    };

    axios(option).then(({ data }) => {
      if (data.rsp_code === "A0000") {
        alert("결제 완료 !");
      }
    });
    
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setamount(value);
  };

  return (
    <ModalCardBlock>
      <CardTitle>{bankName}</CardTitle>
      <FintechUseNo>{fintechUseNo}</FintechUseNo>
      <p>{tofintechno}로 돈을 보냅니다.</p>
      <input onChange={handleChange}></input>
      <WithDrawButton onClick={handlePayButtonClick}>결제하기</WithDrawButton>
    </ModalCardBlock>
  );
};

export default ModalCard;
