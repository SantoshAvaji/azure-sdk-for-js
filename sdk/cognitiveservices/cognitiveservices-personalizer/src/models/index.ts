/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */


import * as msRest from "@azure/ms-rest-js";

/**
 * An object containing more specific information than the parent object about the error.
 */
export interface InternalError {
  /**
   * Detailed error code.
   */
  code?: string;
  /**
   * The error object.
   */
  innererror?: InternalError;
}

/**
 * The error object.
 */
export interface PersonalizerError {
  /**
   * High level error code. Possible values include: 'BadRequest', 'ResourceNotFound',
   * 'InternalServerError'
   */
  code: ErrorCode;
  /**
   * A message explaining the error reported by the service.
   */
  message: string;
  /**
   * Error source element.
   */
  target?: string;
  /**
   * An array of details about specific errors that led to this reported error.
   */
  details?: PersonalizerError[];
  /**
   * Finer error details.
   */
  innerError?: InternalError;
}

/**
 * Used to return an error to the client
 */
export interface ErrorResponse {
  /**
   * The error object.
   */
  error: PersonalizerError;
}

/**
 * Reward given to a rank response.
 */
export interface RewardRequest {
  /**
   * Reward to be assigned to an action. Value should be between -1 and 1 inclusive.
   */
  value: number;
}

/**
 * An action with it's associated features used for ranking.
 */
export interface RankableAction {
  /**
   * Id of the action.
   */
  id: string;
  /**
   * List of dictionaries containing features.
   */
  features: any[];
}

/**
 * Request a set of actions to be ranked by the Personalizer service.
 */
export interface RankRequest {
  /**
   * Features of the context used for Personalizer as a
   * dictionary of dictionaries. This depends on the application, and
   * typically includes features about the current user, their
   * device, profile information, data about time and date, etc.
   */
  contextFeatures?: any[];
  /**
   * The set of actions the Personalizer service can pick from.
   * The set should not contain more than 50 actions.
   * The order of the actions does not affect the rank result but the order
   * should match the sequence your application would have used to display them.
   */
  actions: RankableAction[];
  /**
   * The set of action ids to exclude from ranking.
   */
  excludedActions?: string[];
  /**
   * Optionally pass an eventId that uniquely identifies this Rank event.
   * If null, the service generates a unique eventId. The eventId will be used for
   * associating this request with its reward, as well as seeding the pseudo-random
   * generator when making a Personalizer call.
   */
  eventId?: string;
  /**
   * Send false if the user will see the rank results, therefore
   * Personalizer will expect a Reward call, otherwise it will assign the default
   * Reward to the event. Send true if it is possible the user will not see the
   * rank results, because the page is rendering later, or the Rank results may be
   * overridden by code further downstream. Default value: false.
   */
  deferActivation?: boolean;
}

/**
 * A ranked action with its resulting probability.
 */
export interface RankedAction {
  /**
   * Id of the action
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * Probability of the action
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly probability?: number;
}

/**
 * A resulting ordered list of actions that result from a rank request.
 */
export interface RankResponse {
  /**
   * The calculated ranking for the current request.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly ranking?: RankedAction[];
  /**
   * The eventId for the round trip from request to response.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly eventId?: string;
  /**
   * The action chosen by the Personalizer service. This is the action for which to report the
   * reward. This might not be the
   * first found in 'ranking' if an action in the request in first position was part of the
   * excluded ids.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly rewardActionId?: string;
}

/**
 * Defines values for ErrorCode.
 * Possible values include: 'BadRequest', 'ResourceNotFound', 'InternalServerError'
 * @readonly
 * @enum {string}
 */
export type ErrorCode = 'BadRequest' | 'ResourceNotFound' | 'InternalServerError';

/**
 * Contains response data for the rank operation.
 */
export type RankResponse2 = RankResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RankResponse;
    };
};
