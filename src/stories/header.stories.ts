import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Meta, Story } from '@storybook/angular';
import { AppModule } from 'src/app/app.module';
import { HeaderComponent } from 'src/app/components/common/header/header.component';

export default {
    title: 'Example/Header',
    component: HeaderComponent,
  } as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  component: HeaderComponent,
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
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
  item: {
    id: 0,
    name: 'Intelligent Granite Salad',
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    imgUrl: 'http://placeimg.com/640/480',
    price: '683.00',
    cartView: false,
  },
  isUpdateMode: false
};