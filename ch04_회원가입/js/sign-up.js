// 자바스크립트는 문장의 맨 끝 ; - 필수가 아님.
function checkSign(event) {
  // 폼에 기존에 입력한 값 그대로 유지하기
  event.preventDefault();
  // id 의 input 상자 자체를 변수로 저장
  const userId = document.querySelector("#uid");
  // 비빌번호 저장
  const pwd = document.querySelector("#pwd");
  // 확인용 비번 저장
  const pwdCheck = document.querySelector("#confirm");
  // 경로
  const path = document.querySelector("#path");
  // 메모
  const memo = document.querySelector("#memo");
  // 메일 수신확인 여부 : 체크된 것만 가져오기
  const mailCheck = document.querySelector('input[name="mail"]:checked');
  // 버스 / 메트로 / 도보
  const bus = document.querySelector("#bus");
  const metro = document.querySelector("#metro");
  const walking = document.querySelector("#walking");

  let mailStatus = "메일수신 안함";
  if (mailCheck.value === "yes") {
    mailStatus = "메일 수신";
  }

  // id 상자의 내용을 변수에 저장
  const idValue = userId.value;
  // 아이디는 4~10자 사이인지 비교
  if (idValue.length < 4 || idValue > 10) {
    alert("아이디는 4자~10자 사이입니다.");
    userId.focus();
    return;
  }

  // 비번 확인
  // ==, != : 값만 비교
  // ===, !== : 값과 타입 둘다 비교
  if (pwd.value !== pwdCheck.value) {
    alert("비밀번호가 일치하지 않아요");
    pwdCheck.focus();
    return;
  }

  // 콘솔에 출력해 보기
  // 리터럴 타입으로 출력하기 : ` (백틱)
  // 백틱 내에서 위에서 선언한 변수를 쓰는 법 : ${변수}
  const result = `
        - 아이디 : ${userId.value}
        - 가입경로 : ${path.value}
        - 메모 : ${memo.value}
        - 메일수신 : ${mailStatus}
        - 버스 : ${bus.checked} / 지하철 : ${metro.checked} / 도보 : ${walking.checked}
        `;
  console.log(result);
}
