/**
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/// <reference path="../../missing-types.d.ts" />
/// <reference path="../shared/initial-app/Intro/missing-types.d.ts" />

declare module 'client-bundle:*' {
  const url: string;
  export default url;
  export const imports: string[];
  /** Source for this script and all its dependencies */
  export const allSrc: string;
}

declare module 'initial-css:' {
  const css: string;
  export default css;
}
