import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";

const SettingsPage = () => {
  return (
    <article>
      <header className="flex-col">
        <h1 className="font-bold text-3xl mb-2">Settings</h1>
        <p>Update your profile information.</p>
      </header>

      <br />

      <Card>
        <CardHeader>
          <h2 className="font-bold text-xl">Profile</h2>
        </CardHeader>
        <CardContent>Forms</CardContent>
      </Card>
    </article>
  );
};

export default SettingsPage;
