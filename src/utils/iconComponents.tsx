
import React from "react";
import {
  Database,
  FileWarning,
  Link2Off,
  Clock,
  BarChart2,
  UserX,
  HelpCircle,
  FileText,
  Settings2
} from "lucide-react";

export const DataProcessingIcon = () => <Database className="h-5 w-5" />;
export const ReconciliationIcon = () => <FileWarning className="h-5 w-5" />;
export const IntegrationIcon = () => <Link2Off className="h-5 w-5" />;
export const PerformanceIcon = () => <Clock className="h-5 w-5" />;
export const ReportingIcon = () => <BarChart2 className="h-5 w-5" />;
export const AuthenticationIcon = () => <UserX className="h-5 w-5" />;
export const UsabilityIcon = () => <HelpCircle className="h-5 w-5" />;
export const DocumentationIcon = () => <FileText className="h-5 w-5" />;
export const CustomizationIcon = () => <Settings2 className="h-5 w-5" />;
