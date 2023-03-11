import {
  TimelineWrapper,
  TimelineBox,
  TimelineTime,
  TimelineDivider,
  TimelineDividers,
  useTimeline
} from "@nessprim/planby";


export function Timeline({
  isBaseTimeFormat,
  isSidebar,
  dayWidth,
  hourWidth,
  numberOfHoursInDay,
  offsetStartHoursRange,
  isTimelineVisible,
  isToday,
  isCurrentTime,
  sidebarWidth
}) {

  const { time, dividers, getTime, formatTime } = useTimeline(
    numberOfHoursInDay,
    isBaseTimeFormat
  );

  // const renderTime = (index) => (
  //   <TimelineBox key={index} width={hourWidth}>
  //     <TimelineTime style={{top: "0px", left: "3px"}}>
  //       {formatTime(index + offsetStartHoursRange).toUpperCase()}
  //     </TimelineTime>
  //     <TimelineDividers>{renderDividers()}</TimelineDividers>
  //   </TimelineBox>
  // );

  const renderTime = (item, index) => {
    const { isNewDay, time } = getTime(item);
    const position = { left: hourWidth * index, width: hourWidth };
    const isVisible = isTimelineVisible(position);
    if (!isVisible) return null;
    return (
      <TimelineBox
        key={index}
        isToday={isToday}
        isCurrentTime={isCurrentTime}
        {...position}
       >
        <TimelineTime
          isNewDay={isNewDay}
          isBaseTimeFormat={isBaseTimeFormat}
          style={{top: "0px", left: "3px"}}
        >
          {time}
        </TimelineTime>
        <TimelineDividers>{renderDividers(isNewDay)}</TimelineDividers>
      </TimelineBox>
    );
  };

  const renderDividers = () =>
    dividers.map((_, index) => (
      <TimelineDivider key={index} width={hourWidth} />
    ));

  return (
    <TimelineWrapper
      dayWidth={dayWidth}
      sidebarWidth={sidebarWidth}
      isSidebar={isSidebar}
      style={{height: "20px"}}
      
    >
      {time.map((_, index) => renderTime(index))}
    </TimelineWrapper>
  );
}