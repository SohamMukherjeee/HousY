import CardNav from "./CardNav";
import logo from "../assets/Generated Image September 07, 2025 - 12_07AM-Photoroom.png"; // Replace with your logo path
const NNavbar = () => {
  const items = [
    {
      label: "Buy",
      bgColor: "#AFC4D7",
      textColor: "#fff",
      links: [{ label: "Buy", ariaLabel: "Buying projects" }],
    },
    {
      label: "Sell",
      bgColor: "#DDC9B2",
      textColor: "#fff",
      links: [{ label: "sell", ariaLabel: "sell Projects" }],
    },
    {
      label: "Agents",
      bgColor: "#AACABF",
      textColor: "#fff",
      links: [{ label: "Agents", ariaLabel: "Email us" }],
    },
  ];

  return (
    <CardNav
      logo={logo}
      logoAlt="Company Logo"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
};
export default NNavbar;
