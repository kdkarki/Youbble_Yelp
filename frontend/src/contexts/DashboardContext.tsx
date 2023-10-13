import { type } from 'os';
import React, { ReactNode, createContext, useContext, useState } from 'react';

type PendingRequestType = {
  // define the shape of the access request object
  _id: string;
  userId: string;
  email: string;
  requestedRole: string;
  // ... other attributes
};

type ApprovedRequestType = {
  // define the shape of the access request object
  _id: string;
  userId: string;
  email: string;
  requestedRole: string;
  approvedBy: string;
  approvedDate: Date;
};

type JobType = {
    // define the shape of the job object
    jobID: string;
    jobName: string;
    jobDescription: string;
    // ... other attributes
}

type DashboardContextType = {
  pendingRequests: PendingRequestType[];
  setPendingRequests: React.Dispatch<React.SetStateAction<PendingRequestType[]>>;
  approvedRequests: ApprovedRequestType[];
  setApprovedRequests: React.Dispatch<React.SetStateAction<ApprovedRequestType[]>>;

  jobsRan: JobType[];
  setJobsRan: React.Dispatch<React.SetStateAction<JobType[]>>;
  // ... other state and functions as required
};

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

type Props = {
  children: ReactNode;
};

export const DashboardProvider: React.FC<Props> = ({ children }) => {
  const [pendingRequests, setPendingRequests] = useState<PendingRequestType[]>([]);
  const [approvedRequests, setApprovedRequests] = useState<ApprovedRequestType[]>([]);
  const [jobsRan, setJobsRan] = useState<JobType[]>([]);
  // ... other state initializations

  return (
    <DashboardContext.Provider value={{ pendingRequests, approvedRequests, setPendingRequests, setApprovedRequests, jobsRan, setJobsRan }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = (): DashboardContextType => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};
