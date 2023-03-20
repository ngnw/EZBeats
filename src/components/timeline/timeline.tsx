import React from 'react';
import './timeline.css';
import { epg, channels } from './schemas.js';
import {
  useEpg,
  Epg,
  Layout,
  ProgramBox,
  ProgramContent,
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
  Line,
  CurrentTimeBox,
  CurrentTimeContent,
} from "@nessprim/planby";

function CustomTimeline(props: Timeline) {
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
 
   const renderTime = (item: string | number, index: number) => {
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
 
  const renderDividers = (isNewDay: boolean) =>
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

function CustomChannelItem({ channel }: ChannelItem) {
  const { position } = channel;
  return (
    <ChannelBox {...position}/>
  );
}

function CustomProgramItem({program,...rest }: ProgramItem) {
  const { styles, formatTime, isLive, isMinWidth } = useProgram({ program,...rest });
  const { data } = program;
  const { color } = data;

  return (
    <ProgramBox width={styles.width} style={styles.position}>
      <ProgramContent
        width={styles.width}
        isLive={isLive}
        style={{background: color}}
      >
      </ProgramContent>
    </ProgramBox>
  );
}

function CustomLine({ styles }: Line) {
  return (
    <div
      style={{
        ...styles.position,
        background: "red",
        pointerEvents: "auto",
      }}
    />
  );
}

function CustomCurrentTime(props: CurrentTime) {
  const { isVerticalMode, isRTL, isBaseTimeFormat } = props;
  const { time, styles } = props;

  return (
    <CurrentTimeBox {...styles.position}>
      <CurrentTimeContent
        isVerticalMode={isVerticalMode}
        isBaseTimeFormat={isBaseTimeFormat}
        isRTL={isRTL}
      >
        {time}
      </CurrentTimeContent>
    </CurrentTimeBox>
  );
}

function TimelineT() {
  
  const {
    getEpgProps,
    getLayoutProps
  } = useEpg({
    channels,
    epg,
    startDate: '2022-02-02T00:00:00',
    endDate: '2022-02-02T05:00:00',
    itemHeight: 20,
    sidebarWidth: 100,
    isLine: true,
    isCurrentTime: true,
    dayWidth: 1500
  });

  return (
    <div className="timelinet">
      <div style={{ height: 'inherit'}}>
        <Epg {...getEpgProps()}>
          <Layout
            {...getLayoutProps()}
            renderProgram={({ program,...rest }) => (
              <CustomProgramItem key={program.data.id} program={program} {...rest} />
            )}
            renderChannel={({ channel, ...rest }) => (
              <CustomChannelItem key={channel.uuid} channel={channel} {...rest} />
            )}
            renderTimeline={(props) => <CustomTimeline {...props} />}
            renderLine={(props) => <CustomLine {...props} />}
          />
        </Epg>
      </div>
    </div>
  );
}

export default TimelineT;
