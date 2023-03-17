import React from 'react';
import './timeline.css';
import { epg, channels } from './schemas.js';
import {
  useEpg,
  Epg,
  Layout,
  ProgramBox,
  ProgramContent,
  ProgramFlex,
  ProgramStack,
  ProgramTitle,
  ProgramText,
  ProgramImage,
  useProgram,
  Program,
  ProgramItem,
  ChannelBox,
  ChannelLogo,
  Channel,
  ChannelItem,
  CurrentTime,
  Timeline,
  TimelineWrapper,
  TimelineBox,
  TimelineTime,
  TimelineDivider,
  TimelineDividers,
  useTimeline,
} from "@nessprim/planby";

export function CustomTimeline(props) {
  const { time, dividers, getTime, getTimelineProps, getCurrentTimeProps } =
     useTimeline(props);
 
   const {
     isToday,
     isBaseTimeFormat,
     isCurrentTime,
     isTimelineVisible,
     isVerticalMode,
   } = props;
 
   const { hourWidth } = props;
 
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
         >
           {time}
         </TimelineTime>
         <TimelineDividers>{renderDividers(isNewDay)}</TimelineDividers>
       </TimelineBox>
     );
   };
 
  const renderDividers = (isNewDay) =>
     dividers.map((_, index) => (
       <TimelineDivider key={index} isNewDay={isNewDay} width={hourWidth} />
     ));
 
   return (
   <TimelineWrapper {...getTimelineProps()}>
       {isCurrentTime && <CurrentTime {...getCurrentTimeProps()} />}
       {time.map((item, index) => renderTime(item, index))}
     </TimelineWrapper>
   );
 }

const CustomChannelItem = ({ channel }) => {
  const { position, logo } = channel;
  return (
    <ChannelBox {...position}/>
  );
};

const CustomProgramItem = ({ program,...rest }) => {
  const { styles, formatTime, isLive, isMinWidth } = useProgram({ program,...rest });

  const { data } = program;
  const { since, till } = data;

  const sinceTime = formatTime(since);
  const tillTime = formatTime(till);

  return (
    <ProgramBox width={styles.width} style={styles.position}>
      <ProgramContent
        width={styles.width}
        isLive={isLive}
      >
      </ProgramContent>
    </ProgramBox>
  );
};



function TimelineT() {

  console.log(epg)

  const {
    getEpgProps,
    getLayoutProps,
    onScrollToNow,
    onScrollLeft,
    onScrollRight,
  } = useEpg({
    epg,
    channels,
    startDate: '2022-02-02T00:00:00',
    endDate: '2022-02-02T23:00:00',
    itemHeight: 20,
    sidebarWidth: 100,
    isLine: true,
    isCurrentTime: true
  });

  return (
    <div className="timelinet">
      <div style={{ height: 'inherit'}}>
        <Epg {...getEpgProps()} style={{padding: "0px"}}>
          <Layout
            {...getLayoutProps()}
            renderProgram={({ program,...rest }) => (
              <CustomProgramItem key={program.data.id} program={program} {...rest} />
            )}
            renderChannel={({ channel, ...rest }) => (
              <CustomChannelItem key={channel.uuid} channel={channel} {...rest} />
            )}
            renderTimeline={(props) => <CustomTimeline {...props} />}
          />
        </Epg>
      </div>
    </div>
  );
}

export default TimelineT;