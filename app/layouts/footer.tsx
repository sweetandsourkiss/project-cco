import { Outlet } from "react-router";

export default function FooterLayout() {
  return (
    <>
      <Outlet />
      <div className="px-4 py-8 text-xs sm:text-sm">
        본 웹사이트는 유튜버 침착맨의 팬 활동을 위해 제작된 비상업적 사이트입니다. 사이트에 사용된 모든 이미지 및
        콘텐츠의 저작권과 초상권은 원저작자인 침착맨과 관련 권리자에게 있습니다. 본 사이트는 어떠한 수익도 창출하지
        않으며, 원저작자의 요청이 있을 시 모든 콘텐츠는 즉시 삭제 조치됩니다. <br />
        [연락처: sweetandsourkiss@gmail.com]
      </div>
    </>
  );
}
