// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ItemCardComponent } from '../app/components/item/item-card/item-card.component';
import { withKnobs, number, text, boolean  } from '@storybook/addon-knobs';
import { AppModule } from 'src/app/app.module';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

export default {
  title: 'Example/Card',
  component: ItemCardComponent,
  decorators: [withKnobs],
} as Meta;

const Template: Story<ItemCardComponent> = (args: ItemCardComponent) => ({
  component: ItemCardComponent,
  moduleMetadata: {
    imports: [
      AppModule,
      RouterModule.forRoot(
        [
          {
            path: '',
            loadChildren: () =>
              import('./../app/app.module').then((m) => m.AppModule),
          },
        ],
        {
          useHash: true,
        }
      ),
    ],
    providers: [
      {
        provide: APP_BASE_HREF,
        userValue: '/',
      },
    ],
  },
  parameters: {
    docs: { 
      page: null 
    }
  },
  props: {
    id: number('id', args.id),
    name: text('name', args.name),
    description: text('description', args.description),
    imgUrl: text('imgUrl', args.imgUrl),
    price: text('price', args.price),
    cartView: boolean('cartView', args.cartView),
  }
});

export const Basic = Template.bind({});
Basic.args = {
  id: 0,
  name: 'Intelligent Granite Salad',
  description:
    "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
  imgUrl: 'http://placeimg.com/640/480',
  price: '683.00',
  cartView: false,
};
