import { CardComponent } from '../components/card/card.component';

export default {
  title: 'Card component',
};

export const card = () => ({
  component: CardComponent,
  props: {
    title: 'New title',
  },
});

card.story = {
  name: 'Card',
};
