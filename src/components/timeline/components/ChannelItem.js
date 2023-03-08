import { ChannelBox, ChannelLogo } from "planby";


export const ChannelItem = ({ channel }) => {
  const { position, logo } = channel;
  return (
    <ChannelBox {...position} style={{ backgroundColor: "#f78eb6" , height: "13px" , borderRadius: "3px" , marginTop: "4px" }}>
      {/* Overwrite styles by add eg. style={{ maxHeight: 52, maxWidth: 52,... }} */}
      {/* Or stay with default styles */}
      <ChannelLogo
        src={logo}
        alt="Logo"
        style={{ display: "none" }}
      />
    </ChannelBox>
  );
};
