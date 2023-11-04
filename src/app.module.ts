/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhotoModule } from './photo/photo.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { PaymentsModule } from './payments/payments.module';
import { OrdersModule } from './orders/orders.module';
import { InventoryModule } from './inventory/inventory.module';
import { CustomersModule } from './customers/customers.module';
import { OuthModule } from './outh/outh.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, PhotoModule, ProductsModule, UsersModule, PaymentsModule, OrdersModule, InventoryModule, CustomersModule, OuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
