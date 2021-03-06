import axios from "axios";
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  UPLOAD_CLOTHES,
  USER_INFO,
  FAV_UPDATE,
  CLOTHES_LISTING,
  UPLOAD_STYLE,
  STYLE_LISTING,
  UPDATE_CLOTHES,
  DELETE_CLOTHES,
  WITHDRAWAL_USER,
  SHARED_LISTING,
  DELETE_STYLE,
  EMAIL_FIND,
} from "./types";

// 로그인
export function loginUser(dataToSubmit) {
  const request = axios
    .post("/api/users/login", dataToSubmit)
    .then((response) => response.data);
  return { type: LOGIN_USER, payload: request };
}

// 회원가입
export function registerUser(dataToSubmit) {
  const request = axios
    .post("/api/users/register", dataToSubmit)
    .then((response) => response.data);
  return { type: REGISTER_USER, payload: request };
}

// 페이지 권한 확인
export function auth() {
  const request = axios
    .post("/api/users/auth")
    .then((response) => response.data);
  return { type: AUTH_USER, payload: request };
}

// 로그아웃
export async function withdrawal() {
  const request = await axios.post("/api/users/withdrawal");
  return { type: WITHDRAWAL_USER, payload: request.data };
}

// 현재 로그인한 사용자 정보 불러오기
export async function getUserInfo() {
  const request = await axios.get("/api/users/getUserInfo");
  return { type: USER_INFO, payload: request.data };
}
// email 찾기
export function getEmail(dataToSubmit) {
  const request = axios
    .post("/api/users/findEmail", dataToSubmit)
    .then((response) => response.data);
  return { type: EMAIL_FIND, payload: request };
}

//---------------------------------------------------------------------

// 옷 업로드
export async function uploadClothes(dataToSubmit) {
  const request = await axios.post("/api/clothes/upload", dataToSubmit);
  return { type: UPLOAD_CLOTHES, payload: request.data };
}

// 즐겨찾기 등록 해제
export async function updateFavorite(dataToSubmit) {
  const request = await axios.post("/api/clothes/updateFav", dataToSubmit);
  return { type: FAV_UPDATE, payload: request.data };
}

// 옷 목록 조회
export async function getClothes(filter) {
  // const params = _.pickBy(filter, _.identity);
  const request = await axios.get("/api/clothes/listing", { params: filter });
  return { type: CLOTHES_LISTING, payload: request.data };
}

// 옷 정보 업데이트
export async function updateClothes(dataToSubmit) {
  const request = await axios.post("/api/clothes/update", dataToSubmit);
  return { type: UPDATE_CLOTHES, payload: request.data };
}

// 옷 삭제
export async function deleteClothes(dataToSubmit) {
  const request = await axios.post("/api/clothes/delete", dataToSubmit);
  return { type: DELETE_CLOTHES, payload: request.data };
}

//---------------------------------------------------------------------

// 스타일 업로드
export async function uploadStyle(dataToSubmit) {
  const request = await axios.post("/api/style/upload", dataToSubmit);
  return { type: UPLOAD_STYLE, payload: request.data };
}

// 스타일 조회
export async function getStyle(dataToSubmit) {
  const request = await axios.get("/api/style/listing", {
    params: dataToSubmit,
  });
  return { type: STYLE_LISTING, payload: request.data };
}

// 공유 스타일 조회
export async function getSharedStyle(dataToSubmit) {
  const request = await axios.get("/api/style/listingshared", {
    params: dataToSubmit,
  });
  return { type: SHARED_LISTING, payload: request.data };
}

// 스타일 삭제
export async function deleteStyle(dataToSubmit) {
  const request = await axios.post("/api/style/delete", dataToSubmit);
  return { type: DELETE_STYLE, payload: request.data };
}
