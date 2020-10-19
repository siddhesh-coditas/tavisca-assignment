// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {AppComponent} from './../app/app.component';

export default {
  title: 'Example/Card',
  component: AppComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<AppComponent> = (args: AppComponent) => ({
  component: AppComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Basic',
};