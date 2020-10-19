// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {ItemCardComponent} from '../app/components/item-card/item-card.component';

export default {
  title: 'Example/Card',
  component: ItemCardComponent
} as Meta;

const Template: Story<ItemCardComponent> = (args: ItemCardComponent) => ({
  component: ItemCardComponent,
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
  item: {
    "id": 0,
    "name": "Intelligent Granite Salad",
    "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    "imgUrl": "http://placeimg.com/640/480",
    "price": "683.00"
  }
};