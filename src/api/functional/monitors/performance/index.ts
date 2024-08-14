/**
 * @packageDocumentation
 * @module api.functional.monitors.performance
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import type { IPerformance } from "../../../structures/monitors/IPerformance";

/**
 * Get performance information.
 *
 * Get perofmration information composed with CPU, memory and resource usage.
 *
 * @returns Performance info
 * @tag Monitor
 * @author Samchon
 *
 * @controller MonitorPerformanceController.get
 * @path GET /monitors/performance
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function get(connection: IConnection): Promise<get.Output> {
  return !!connection.simulate
    ? get.simulate(connection)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...get.METADATA,
          template: get.METADATA.path,
          path: get.path(),
        },
      );
}
export namespace get {
  export type Output = IPerformance;

  export const METADATA = {
    method: "GET",
    path: "/monitors/performance",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 200,
  } as const;

  export const path = () => "/monitors/performance";
  export const random = (g?: Partial<typia.IRandomGenerator>): IPerformance =>
    typia.random<IPerformance>(g);
  export const simulate = (connection: IConnection): Output => {
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}
