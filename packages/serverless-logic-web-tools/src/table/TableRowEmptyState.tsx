/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React from "react";
import { Button } from "@patternfly/react-core/dist/js/components/Button";
import {
  EmptyState,
  EmptyStateBody,
  EmptyStateIcon,
  EmptyStateHeader,
  EmptyStateFooter,
} from "@patternfly/react-core/dist/js/components/EmptyState";

import { Bullseye } from "@patternfly/react-core/dist/js/layouts/Bullseye";
import { SearchIcon } from "@patternfly/react-icons/dist/js/icons";
import { Td, Tr } from "@patternfly/react-table/dist/esm";
import "./Table.css";

type TableRowEmptyStateProps = {
  colSpan: number;
  elementsName: string;
  onClearFilters: () => void;
};

export function TableRowEmptyState(props: TableRowEmptyStateProps) {
  return (
    <Tr>
      <Td colSpan={props.colSpan}>
        <Bullseye>
          <EmptyState variant="sm">
            <EmptyStateHeader
              titleText={<>No matching{props.elementsName}found</>}
              icon={<EmptyStateIcon icon={SearchIcon} />}
              headingLevel="h2"
            />
            <EmptyStateBody>This filter criteria matches no groups. Try changing your filter settings.</EmptyStateBody>
            <EmptyStateFooter>
              <Button variant="link" onClick={props.onClearFilters}>
                Clear all filters
              </Button>
            </EmptyStateFooter>
          </EmptyState>
        </Bullseye>
      </Td>
    </Tr>
  );
}
