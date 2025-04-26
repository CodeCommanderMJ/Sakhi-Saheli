import React from 'react';
import Hero from '../components/home/Hero';
import EmergencyHelp from '../components/home/EmergencyHelp';
import SafetyGuide from '../components/home/SafetyGuide';
import MapPreview from '../components/home/MapPreview';
import EducationPreview from '../components/home/EducationPreview';
import EmpowermentPreview from '../components/home/EmpowermentPreview';
import ShopPreview from '../components/home/ShopPreview';
import SupportChatButton from '../components/common/SupportChatButton';

const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      <Hero />
      <EmergencyHelp />
      <SafetyGuide />
      <MapPreview />
      <EducationPreview />
      <EmpowermentPreview />
      <ShopPreview />
      <SupportChatButton />
    </div>
  );
};

export default HomePage;