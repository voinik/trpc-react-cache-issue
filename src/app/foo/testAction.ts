'use server';

import { getCurrentUser } from '~/data/auth';
import { api } from '~/trpc/server';

export const testAction = async () => {
    console.log('Calling getCurrentUser from testAction');
    const user = await getCurrentUser();
    // Fake auth check
    if (!user) {
        throw new Error('Not authenticated!');
    }

    const authedMessage = await api.post.getAuthedMessage.query();
    return { success: true, data: { authedMessage } };
};
