export function formatVND(amount?: number): string {
    if (amount === undefined || amount === null) {
        return 'liên hệ';
    }
    return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}