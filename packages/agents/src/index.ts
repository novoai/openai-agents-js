import { setDefaultModelProvider } from '@novoaiorg/openai-agents-core';
import { OpenAIProvider } from '@novoaiorg/openai-agents-openai';
import { setDefaultOpenAITracingExporter } from '@novoaiorg/openai-agents-openai';

setDefaultModelProvider(new OpenAIProvider());
setDefaultOpenAITracingExporter();

export * from '@novoaiorg/openai-agents-core';
export * from '@novoaiorg/openai-agents-openai';
export * as realtime from '@novoaiorg/openai-agents-realtime';
