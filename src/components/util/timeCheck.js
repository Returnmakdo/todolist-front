/** 며칠전 등  시간 정보를 리턴하는 함수 */
function timeCheck(prevTime = 1665846659220) {
  const currentTime = Date.now();
  const gap = (currentTime - prevTime) / 1000 / 60;
  if (gap <= 1) return "1분 전";
  else if (1 < gap && gap < 60) return `${gap | 0}분 전`;
  else if (60 <= gap && gap < 1440) return `${parseInt(gap / 60)}시간 전`;
  else if (1440 <= gap && gap < 2880) return "하루 전";
  else if (2880 < gap && gap < 43200) return `${parseInt(gap / 60 / 30)}일 전`;
  return gap;
}

export default timeCheck;
