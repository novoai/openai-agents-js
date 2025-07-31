import type { LanguageModelV1 } from '@ai-sdk/provider';
import { Model, ModelRequest, ResponseStreamEvent, Usage } from '@openai/agents';
/**
 * Wraps a model from the AI SDK that adheres to the LanguageModelV1 spec to be used used as a model
 * in the OpenAI Agents SDK to use other models.
 *
 * While you can use this with the OpenAI models, it is recommended to use the default OpenAI model
 * provider instead.
 *
 * If tracing is enabled, the model will send generation spans to your traces processor.
 *
 * ```ts
 * import { aisdk } from '@openai/agents-extensions';
 * import { openai } from '@ai-sdk/openai';
 *
 * const model = aisdk(openai('gpt-4o'));
 *
 * const agent = new Agent({
 *   name: 'My Agent',
 *   model
 * });
 * ```
 *
 * @param model - The Vercel AI SDK model to wrap.
 * @returns The wrapped model.
 */
export declare class AiSdkModel implements Model {
    #private;
    constructor(model: LanguageModelV1);
    getResponse(request: ModelRequest): Promise<{
        readonly responseId: string;
        readonly usage: Usage;
        readonly output: import("@openai/agents").AgentOutputItem[];
        readonly providerData: {
            text?: string;
            reasoning?: string | Array<{
                type: "text";
                text: string;
                signature?: string;
            } | {
                type: "redacted";
                data: string;
            }>;
            files?: Array<{
                data: string | Uint8Array;
                mimeType: string;
            }>;
            toolCalls?: Array<import("@ai-sdk/provider").LanguageModelV1FunctionToolCall>;
            finishReason: import("@ai-sdk/provider").LanguageModelV1FinishReason;
            usage: {
                promptTokens: number;
                completionTokens: number;
            };
            rawCall: {
                rawPrompt: unknown;
                rawSettings: Record<string, unknown>;
            };
            rawResponse?: {
                headers?: Record<string, string>;
                body?: unknown;
            };
            request?: {
                body?: string;
            };
            response?: {
                id?: string;
                timestamp?: Date;
                modelId?: string;
            };
            warnings?: import("@ai-sdk/provider").LanguageModelV1CallWarning[];
            providerMetadata?: import("@ai-sdk/provider").LanguageModelV1ProviderMetadata;
            sources?: import("@ai-sdk/provider").LanguageModelV1Source[];
            logprobs?: import("@ai-sdk/provider").LanguageModelV1LogProbs;
        };
    }>;
    getStreamedResponse(request: ModelRequest): AsyncIterable<ResponseStreamEvent>;
}
/**
 * Wraps a model from the AI SDK that adheres to the LanguageModelV1 spec to be used used as a model
 * in the OpenAI Agents SDK to use other models.
 *
 * While you can use this with the OpenAI models, it is recommended to use the default OpenAI model
 * provider instead.
 *
 * If tracing is enabled, the model will send generation spans to your traces processor.
 *
 * ```ts
 * import { aisdk } from '@openai/agents-extensions';
 * import { openai } from '@ai-sdk/openai';
 *
 * const model = aisdk(openai('gpt-4o'));
 *
 * const agent = new Agent({
 *   name: 'My Agent',
 *   model
 * });
 * ```
 *
 * @param model - The Vercel AI SDK model to wrap.
 * @returns The wrapped model.
 */
export declare function aisdk(model: LanguageModelV1): AiSdkModel;
export declare function parseArguments(args: string | undefined | null): any;
