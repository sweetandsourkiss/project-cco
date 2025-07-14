import { useState, useEffect } from "react";

function useWindowWidth() {
  // 1. 초기 상태는 `window` 객체에 의존하지 않는 값(e.g., 0)으로 설정합니다.
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // 3. 이 코드는 브라우저에서만 실행됩니다.
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // 2. 컴포넌트가 마운트된 직후, 실제 브라우저 너비로 상태를 업데이트합니다.
    setWidth(window.innerWidth);

    // 4. resize 이벤트 리스너를 추가합니다.
    window.addEventListener("resize", handleResize);

    // 5. 컴포넌트가 언마운트될 때 이벤트 리스너를 정리합니다.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // 이 effect는 마운트 시 한 번만 실행됩니다.

  return width;
}

export default useWindowWidth;
