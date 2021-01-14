import React from "react";
import FeatureCard from "./FeatureCard";
function Features() {
  const features = [
    {
      background: "#b7472a",
      title: "ONLINE SUPPORT 24/7",
      des:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      icon: "fa-headset",
      delay: 2000,
    },
    {
      background: "#ab4227",
      title: "MONEY BACK GUARANTEE",
      des:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      icon: "fa-money-bill-wave",
      delay: 4000,
    },
    {
      background: "#a23f25",
      title: "FREE SHIPPING & RETURN",
      des:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      icon: "fa-truck",
      delay: 6000,
    },
  ];

  const featureCards = features.map((feature) => (
    <FeatureCard
      background={feature.background}
      icon={feature.icon}
      title={feature.title}
      des={feature.des}
    />
  ));

  return <div className="features">{featureCards}</div>;
}

export default Features;
