import React from 'react';
import './timeline.css';
import { Epg, Layout } from "@nessprim/planby";

// Import hooks
import { useApp } from "./useApp";

// Import components
import { Timeline, ChannelItem, ProgramItem } from "./components";

function TimelineT() {
  const { isLoading, getEpgProps, getLayoutProps } = useApp();

  return (
    <div className="timeline">
      <div style={{ height: "100%", width: "100%" }}>
        <Epg isLoading={isLoading} {...getEpgProps()} style={{padding: "0px"}}>
          <Layout
            {...getLayoutProps()}
            renderProgram={({ program, ...rest }) => (
              <ProgramItem key={program.data.id} program={program} {...rest} style={{height: "10%"}}/>
            )}
            renderChannel={({ channel }) => (
              <ChannelItem key={channel.uuid} channel={channel} />
            )}
            renderTimeline={(props) => <Timeline {...props} />}
          />
        </Epg>
      </div>
    </div>
  );
}

export default TimelineT;