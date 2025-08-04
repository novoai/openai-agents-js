export interface ToolOutputWithMedia {
  text: string; // Required text response for OpenAI API
  media?: {
    type: 'image' | 'file';
    url?: string;
    data?: string; // base64
    mimeType: string;
    alt?: string;
  }[];
}
