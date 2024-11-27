import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { DialogInfo } from '@/components/DialogInfo';

export const PersonalInfo: React.FC = () => {
  const userDetails = [
    { label: 'Legal name', value: 'Duong Bui', editable: true },
    { label: 'Preferred name', value: 'Not provided', editable: true },
    { label: 'Email address', value: 'd***@gmail.com', editable: true },
    {
      label: 'Phone numbers',
      value: 'Not provided',
      description:
        'Add a number so confirmed guests and Airbnb can get in touch. You can add other numbers and choose how they’re used.',
      editable: true
    },
    { label: 'Government ID', value: 'Not provided', editable: true },
    { label: 'Address', value: 'Not provided', editable: true },
    { label: 'Emergency contact', value: 'Not provided', editable: true }
  ];

  const sidebarInfo = [
    {
      icon: '🔒', // Replace with actual icons if available in ShadCN
      title: 'Why isn’t my info shown here?',
      description: 'We’re hiding some account details to protect your identity.'
    },
    {
      icon: '🔓',
      title: 'Which details can be edited?',
      description:
        'Contact info and personal details can be edited. If this info was used to verify your identity, you’ll need to get verified again the next time you book—or to continue hosting.'
    },
    {
      icon: '👁️',
      title: 'What info is shared with others?',
      description:
        'Airbnb only releases contact information for Hosts and guests after a reservation is confirmed.'
    }
  ];

  return (
    <div className="container">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage className="font-semibold">
              Personal Info
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <p className="mt-8 text-4xl font-semibold font">Personal Infomation</p>
      <div className="mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {userDetails.map((detail, index) => (
            <div
              key={index}
              className="flex justify-between items-start py-4 border-b"
            >
              <div>
                <p className="text-sm font-medium text-gray-800">
                  {detail.label}
                </p>
                <p className="text-sm text-gray-500">{detail.value}</p>
                {detail.description && (
                  <p className="text-xs text-gray-400 mt-1">
                    {detail.description}
                  </p>
                )}
              </div>
              <DialogInfo detail={detail} />
            </div>
          ))}
        </div>

        {/* Sidebar Section */}
        <div className="space-y-6">
          {sidebarInfo.map((info, index) => (
            <Card key={index} className="shadow-sm border rounded-md">
              <CardHeader className="flex items-start space-x-4">
                <span className="text-2xl">{info.icon}</span>
                <div>
                  <CardTitle className="text-sm font-semibold">
                    {info.title}
                  </CardTitle>
                  <CardContent className="text-sm text-gray-500">
                    {info.description}
                  </CardContent>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
