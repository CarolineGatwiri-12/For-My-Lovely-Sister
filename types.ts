export interface StorySegment {
  id: number;
  text: string;
  subtext?: string;
  imageUrl?: string;
  alignment: 'left' | 'right' | 'center';
}

export enum AppState {
  SCROLLING = 'SCROLLING',
  PROPOSAL_FLOW = 'PROPOSAL_FLOW',
  ACCEPTED = 'ACCEPTED'
}
