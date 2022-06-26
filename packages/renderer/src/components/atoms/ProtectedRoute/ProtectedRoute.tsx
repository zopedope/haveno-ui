// =============================================================================
//  Copyright 2022 Haveno
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
// =============================================================================

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { ReactNode } from "react";
import { useAuth } from "@hooks/session/useAuth";
import { deleteSession } from "@utils/session";
import { ROUTES } from "@constants/routes";

export function ProtectedRoute({ children }: { children: ReactNode }) {
  const { data: isAuthed, isLoading, isSuccess } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (!isAuthed || !isSuccess) {
      deleteSession();
      navigate(ROUTES.Login);
    }
  }, [isLoading, isAuthed, isSuccess]);

  return isSuccess && isAuthed ? <>{children}</> : null;
}
