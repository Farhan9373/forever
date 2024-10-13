import { stripe } from '../../config/Stripe.js';
import { User } from '../../modal/user.js';

export const paymentcontrol = async (req, res) => {
  try {
    const { cartItems } = req.body;
    const user = await User.findOne({ _id: req.userId });

    const params = {
      submit_type: 'pay',
      mode: 'payment',
      payment_method_types: ['card'], 
      shipping_options: [
        {
          shipping_rate: 'shr_1Q7iBNRqhsIbu4bTV0z51FBI', 
        },
      ],
      customer_email: user.email,
      line_items: cartItems.map((item) => {
        // Ensure productImage is an array, or wrap it in an array
        const productImages = Array.isArray(item.productId.productImage) 
          ? item.productId.productImage 
          : [item.productId.productImage];

        return {
          price_data: {
            currency: 'inr',
            product_data: {
              name: item.productId.productName,
              images: productImages, // Ensure productImages is an array of URLs
              metadata: {
                productId: item.productId._id,
              },
            },
            unit_amount: item.productId.sellingPrice * 100, // Amount in paise/cents
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${process.env.FRONTEND_URL}/success`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
    };

    const session = await stripe.checkout.sessions.create(params);

    res.status(303).json(session);
  } catch (error) {
    console.error('Error creating Stripe session:', error);
    res.status(500).json({ error: 'Payment processing error' });
  }
};
