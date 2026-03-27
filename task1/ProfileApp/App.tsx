import React from "react";
import { ScrollView } from "react-native";
import { ProfileCard } from "./src/components/ProfileCard";
import { ContactSection } from "./src/components/ContactSection";

export default function App(){
  return(
    <ScrollView>
      <ProfileCard
      name="Aliyanur"
      role="Frontend Developer"
      bio="Study at AlmaU"
      avatar="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      />

    <ContactSection></ContactSection>
    </ScrollView>
  );
}